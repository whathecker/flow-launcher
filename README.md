# flow-launcher

Launch your flow at your will and stay productive all the time 🚀🚀💫💫 (It's a goal-based to-do app I built for fun & learning RN)

## Expo dependency

- This project uses Expo managed workflow
- This project built on customized Expo runtime since it has dependency on a unsupported package by Expo default runtime
- Customized Expo runtime is built using [EAS build](https://docs.expo.dev/build/introduction/)
- [Expo development client](https://docs.expo.dev/clients/introduction/) is used for developing locally & testing

## Setup the local build

#### 1. Pre-requisite: Build customized runtime & install custom dev client

- EAS build should be created in the Expo account [documentaion](https://docs.expo.dev/build/setup/)
- Remember to configure [internal distribution](https://docs.expo.dev/build/internal-distribution/) in `eas.json`
- Upon successful build, install Expo Custom Development Client in the device (EAS build will give a download URL)
- Development client from the download comes with customized runtime (more on [custom development client](https://docs.expo.dev/clients/introduction/))

#### 2. Launch the app locally

After you have the custom development client installed in the device (or a simulator), run following command.

```
  expo start --dev-client
```

or

```
  yarn start
```
