# React Native Envs Example

## How it works

You have the environments in the [./envs](./envs) folder.

In this example the [./envs/general.js](./envs/general.js) are general envs, for all environments, and you can override in each environment.

All of it is just JavaScript objects. So you can create yours own environments and other files to share between your environments and override if needed.

And we install this folder as a dependencie:

```sh
yarn add "./envs"
# or
npm i "./envs"
```

<hr>

## How to use

```js
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import envs from 'envs';

const App = () => (
  <SafeAreaView>
    <View>
      <Text>IS_ANDROID: {envs.IS_ANDROID ? 'true' : 'false'}</Text>
      <Text>IS_IOS: {envs.IS_IOS ? 'true' : 'false'}</Text>
      <Text>APP_NAME: {envs.APP_NAME}</Text>
      <Text>APP_ENV: {envs.APP_ENV}</Text>
      <Text>API_HOST: {envs.API_HOST}</Text>
    </View>
  </SafeAreaView>
);

export default App;
```

<hr>

## Setting each environment

Use the scripts in [package.json](package.json) (if you create new environment create the scripts properly scritps).

### Set development

```sh
yarn set:development
```

### Set production

```sh
yarn set:prod
```

### Set staging

```sh
yarn set:staging
```

Use the script before the commands to run in dev and to build, you can see examples in the [package.json](package.json) file.

<hr>

## Warning: env.js file

You should keep the [./envs/env.js](./envs/env.js) file in your repository, this way you won't have trouble with ESLint and tests with the import failling (especially if you are, for example, using git hooks with Husky for ESLint check and tests).

To avoid git keep tracking the changes in this file you can locally run:

```sh
git update-index --skip-worktree ./envs/env.js
```

To track this file again:

```sh
git update-index --no-skip-worktree ./envs/env.js
```

<hr>

## Warning: set scripts

The scripts to set environments are tested only in **MacOS**. Not sure if works properly in Windows.

```json
"set:development": "echo \"export default 'development';\"> ./envs/env.js",
"set:prod": "echo \"export default 'production';\"> ./envs/env.js",
"set:staging": "echo \"export default 'staging';\"> ./envs/env.js",
```

<hr>

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
