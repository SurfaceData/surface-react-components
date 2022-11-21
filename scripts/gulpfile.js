const fs = require("fs");
const util = require("util");
const del = require("del");
const path = require("path");
const babel = require("gulp-babel");
const gulp = require("gulp");
const babelrc = require("../babel.config");
const { default: proxyDirectories } = require("./proxyDirectories");
const pkg = require("../package.json");

const writeFile = util.promisify(fs.writeFile);
const srcRoot = path.join(__dirname, "../src");
const libRoot = path.join(__dirname, "../lib");

const esmRoot = path.join(libRoot, "esm");
const cjsRoot = path.join(libRoot, "cjs");
const tsSources = [
  `${srcRoot}/**/*.tsx`,
  `${srcRoot}/**/*.ts`,
  `!${srcRoot}/**/*.d.ts`,
  `!${srcRoot}/**/*.stories.tsx`,
  `!${srcRoot}/**/*.test.tsx`,
];

function clean(done) {
  del.sync([libRoot], { force: true });
  done();
}

function buildCjs() {
  return gulp.src(tsSources).pipe(babel(babelrc())).pipe(gulp.dest(cjsRoot));
}

function buildEsm() {
  return gulp
    .src(tsSources)
    .pipe(
      babel(
        babelrc(null, {
          NODE_ENV: "esm",
        })
      )
    )
    .pipe(gulp.dest(esmRoot));
}

function copyTypescriptDeclarationFiles() {
  return gulp
    .src(`${srcRoot}/**/*.d.ts`)
    .pipe(gulp.dest(cjsRoot))
    .pipe(gulp.dest(esmRoot));
}

function watch() {
  const watcher = gulp.watch(tsSources);
  watcher.on("change", (filePath) => {
    console.log("File " + filePath + " was changed, running tasks...");
    const cjsPath = filePath
      .replace("src/", "cjs/")
      .replace(/\/[a-z|A-Z]+.(tsx|ts)/, "");

    return gulp.src(filePath).pipe(babel(babelrc())).pipe(gulp.dest(cjsPath));
  });
}

function buildDirectories(done) {
  proxyDirectories().then(() => {
    done();
  });
}

function copyDocs() {
  return gulp.src(["../README.md", "../LICENSE"]).pipe(gulp.dest(libRoot));
}

function createPkgFile(done) {
  delete pkg.devDependencies;
  delete pkg.files;

  pkg.main = "cjs/index.js";
  pkg.module = "esm/index.js";
  pkg.typings = "esm/index.d.ts";
  pkg.scripts = {
    prepublishOnly: "../node_modules/mocha/bin/mocha ../test/validateBuilds.js",
  };

  writeFile(`${libRoot}/package.json`, JSON.stringify(pkg, null, 2) + "\n")
    .then(() => {
      done();
    })
    .catch((err) => {
      if (err) console.error(err.toString());
    });
}

exports.dev = gulp.series(clean, buildCjs, watch);
exports.build = gulp.series(
  clean,
  gulp.parallel(buildCjs, buildEsm),
  gulp.parallel(copyTypescriptDeclarationFiles, copyDocs, createPkgFile),
  buildDirectories
);
