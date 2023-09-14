#!/usr/bin/env node
const fs = require('fs-extra');
const { execSync } = require('child_process');
const minimist = require('minimist');

let allPackages = [
    'moment',
    'react-native-basic-elements',
    '@react-native-async-storage/async-storage',
    '@react-navigation/native',
    '@react-navigation/stack',
    '@reduxjs/toolkit',
    'redux',
    'react-redux',
    'react-native-vector-icons',
    '@react-native-picker/picker',
    'react-native-linear-gradient',
    'react-native-simple-toast',
    'rn-fetch-blob',
    'react-native-fs',
    'react-native-reanimated',
    'react-native-safe-area-context',
    'react-native-gesture-handler',
    'react-native-screens'
]

let devDependencies = [
    'react-native-dotenv'
]

function addLineToAFile(filePath, replaceBy, replaceWith) {
    fs.readFile(filePath, 'utf8')
        .then((data) => {
            const updatedContent = data.replace(replaceBy, replaceWith)
            
            fs.writeFileSync(filePath, updatedContent, 'utf8')
        })
}

// Parse command-line arguments using minimist
const argv = minimist(process.argv.slice(2));

const projectName = argv._[0];
const gitRepo = argv.git;

if (!projectName) {
    console.error('Usage: npx react-native-basic-element-generator <project-name>');
    process.exit(1);
}


execSync(`npx react-native init ${projectName}`, { stdio: 'inherit' });

const templateDir = __dirname + '/Structure';
const projectDir = process.cwd() + '/' + projectName;

fs.copySync(templateDir, projectDir);
fs.removeSync(`${projectDir}/App.tsx`)

// Navigate to the new project directory
process.chdir(projectDir);
let bableConfigFile = `${projectDir}/babel.config.js`
addLineToAFile(
    bableConfigFile,
    'presets: [\'module:metro-react-native-babel-preset\'],',
    `presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
    }],
    'react-native-reanimated/plugin'
  ]`
);

let appBuildGradlewFile = `${projectDir}/android/app/build.gradle`;
addLineToAFile(appBuildGradlewFile,
    'apply plugin: "com.facebook.react"',
    `apply plugin: "com.facebook.react"
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")`
)
execSync(`yarn add ${allPackages.join(' ')}`, { stdio: 'inherit' });
execSync(`yarn add -D ${devDependencies.join(' ')}`, { stdio: 'inherit' });

if(gitRepo){
    execSync(`git init && git remote add origin ${gitRepo} && git add . && git commit -m "First Commit" && git checkout -b master && git push -u origin master`, { stdio: 'inherit' });
}

execSync(`code .`, { stdio: 'inherit' });

console.log(`Created a new React Native project: ${projectName}`);