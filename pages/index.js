import Layout from '../app/common/MyLayout.js'
import TopMain from '../app/pages/MainPage/TopMain.js'
import Problems from '../app/pages/MainPage/Problems.js'
import Steps from '../app/pages/MainPage/Steps.js'
import Reviews from '../app/pages/MainPage/Reviews.js'
import Facts from '../app/pages/MainPage/Facts.js'
import CheckKsk from '../app/pages/MainPage/CheckKsk.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import "../styles/main.scss"

const Page = (props) => (
  <Layout>
    <TopMain/>
    <main className="main">
      <div className="container">
        <Problems/>
        <Steps/>
        <Reviews/>
        <Facts data={props.data}/>
        <CheckKsk/>
      </div>
    </main>
  </Layout>
);

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://dev.e-kck.kz/api/v1/landing/')
  const json = await res.json()
  console.log('cities', json.data)
  return {data: json.data}
}

export default Page;
