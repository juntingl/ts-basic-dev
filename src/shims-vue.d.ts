// ts 识别不了 .vue 的文件，需要编写声明文件
declare module "*.vue" {
  import Vue from "vue"

  export default Vue
}