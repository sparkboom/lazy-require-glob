let glob = require('glob');
let _ = require('lodash');
let _str = require('underscore.string');
let path = require('path');
let callsite = require('callsite');

let requireFile = (file, opts) => {
    if (opts.export){
        return require(file)[opts.export];
    }else{
        return require(file);
    }
};

let createLazyGetter = (obj, name, file, opts) => {

    Object.defineProperty(obj, name, {
        get:  () => {
            if (_.isUndefined(this[`_${name}`])){
                this[`_${name}`] = requireFile(file, opts);
            }

            return this[`_${name}`];
        }
    });
};

let requireGlob = (globPath, opts = {}) => {
    let caller = callsite()[1].getFileName();
    let callerPath = path.dirname(caller);

    let filenames = glob.sync(path.resolve(`${callerPath}/${globPath}`));
    let obj = {};

    _.each(filenames, file => {

        let name = _str.camelize(_.last(file.split('/')).split('.')[0]);

        if (opts.lazy === true){

            createLazyGetter(obj, name, file, opts);
        }else{

            obj[name] = requireFile(file, opts);
        }
    });

    return obj;
};

module.exports = requireGlob;
