declare module 'v-videojs' {
  export interface InstallationOptions {
    [key:string]:any
  }
  export function install(Vue: any, options?: InstallationOptions): void;
}
export default vVideojs
