import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig()

export default () => <div>a</div>

console.log(serverRuntimeConfig.SHOPIFY_SECRET, serverRuntimeConfig.SHOPIFY_API_KEY);