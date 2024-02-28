import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-6">
                    <h1>Introduction</h1>
                    <p>We value the trust you place in us and recognize the importance of secure transactions and information privacy.
                        This Privacy Policy describes how Eliteshop Designs Private Limited and its affiliates (collectively "Eliteshop, we, our, us") collect, use, share, protect or otherwise process your personal information through Myntra website https://www.eliteshop.com.
                        While you may be able to browse certain sections of the Platform without registering with us, however, please note we do not offer any product/service under this Platform outside India. Your personal information will primarily be stored and processed in India and may have data protection laws that are different from those that apply in the country in which you are located.
                        By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions.
                        and agree to be governed by the laws of India including but not limited to the laws applicable</p>

                </div>
            </div>
        </Layout>
    );
};

export default Policy;
