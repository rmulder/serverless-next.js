import React from "react";
import { GetStaticPropsContext } from "next";

type SSGPageProps = {
  name: string;
};

export default function SSGPage(props: any): JSX.Element {
  return (
    <React.Fragment>
      {`Hello ${props.name}! This is an SSG Page using getStaticProps().`}
    </React.Fragment>
  );
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<{ props: SSGPageProps }> {
  return {
    props: { name: "serverless-next.js" }
  };
}
