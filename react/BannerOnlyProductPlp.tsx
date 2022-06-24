import React, { useEffect } from 'react'
import getAppSettings from './graphql/appSettings.gql'
import { useQuery } from 'react-apollo'
// import { useRuntime } from 'vtex.render-runtime'




const BannerOnlyProductPlp = () => {


  const { data, error } = useQuery(getAppSettings, {
    variables: {
      app: "easycl.banner-only-product-plp",
      version: "0.x"
    }
  })

  if (error) {
    console.log(error)
  }

  useEffect(() => {
    if (data) {
      const parseData = JSON.parse(data.appSettings.message)
      console.log(parseData)
    }
  })



  // const runtime = useRuntime()

  // console.log(runtime)


  return (
    <div>BannerOnlyProductPlp</div>
  )
}

export default BannerOnlyProductPlp