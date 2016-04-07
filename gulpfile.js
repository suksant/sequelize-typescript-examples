(function () {
  "use strict";

  let args = require("yargs").argv;
  let compression = require("compression");
  let del = require("del");
  let gulp = require("gulp");
  let plugins = require("gulp-load-plugins")();
  let spawn = require("child_process").spawn;

  plugins.help(gulp);

  gulp.task("clean", "Clean the  distribution.", [], clean);
  gulp.task("compile", "Compile typescript files.", ["typings"], compile);
  gulp.task("start", "Compile the selected example and start the server.", [], start);
  gulp.task("typings", "Install type definitions.", [], typings);

  let tsProject = plugins.typescript.createProject("./tsconfig.json");

  function compile() {
    let tsResult = tsProject.src().pipe(plugins.typescript(tsProject), {typescript: require("typescript")});
    return tsResult.js.pipe(gulp.dest("./build"));
  }

  function clean() {
    return del(["./build", "./typings"]);
  }

  function start() {
    if (args.example) {
      let options = [`./build/${args.example}/src/server.js`];
      spawn("node", options, {stdio: "inherit"});
    } else {
      plugins.util.log(`No example specified. Run: "npm start -- --example=<folder_name>"`);
    }
  }

  function typings() {
    return gulp.src("./typings.json").pipe(plugins.typings());
  }
}());
