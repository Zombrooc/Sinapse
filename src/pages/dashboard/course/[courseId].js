import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession, signIn } from "next-auth/client";

import "bootstrap/dist/css/bootstrap.css";

import Navbar from "../../../components/Navbar";
import Loading from "../../../components/Loading";
import PDFViewer from "../../../components/PDFViewer";

import { useFetch } from "../../../config/api";

const Course = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const [session, loading] = useSession();
  const [openedCollapse, setOpenedCollapse] = useState("");

  const { data } = useFetch(`courses/${courseId}`);

  if (!data) {
    return <Loading show={true} />;
  }

  if (typeof window !== "undefined" && loading) return null;

  console.log(data);

  if (session) {
    return (
      <>
        <Head>
          <title> Sinapse - {data.title} </title>
        </Head>
        <Navbar hideContactInfo />
        <br />
        <br />
        <br />

        {data.Curriculum.map((item) => {
          console.log(item);

          // return (
          //   <>
          //     <div>
          //       <h1>{item.title}</h1>
          //     </div>
          //   </>
          // )
          if (item.__component === "curriculum.school-subject") {
            return (
              <div key={item.id}>
                <h1 style={{ marginLeft: "40px" }}> Exercícios </h1>
                <div>
                  <div>
                    <p
                      style={{
                        marginLeft: "40px",
                        fontSize: "12px",
                        marginTop: '-10px',
                      }}
                    >
                      {" "}
                      {item.title}{" "}
                    </p>
                    {item.files.map((file) => {
                      return (
                        // <div key={file.id}>
                        //   <div className="all-page-container">
                        //     <AllPagesPDFViewer pdf={file.url} />
                        //   </div>
                        // </div>
                        <PDFViewer pdfURL={file.url} key={file.id} />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          } else {
            ("");
          }
        })}
        <Container>
          <h1> {data.title}</h1>
          <Row>
            <Col className=" ml-auto" md="12">
              <div className=" accordion my-3" id="accordionExample">
                {data.Curriculum.map((curriculum) => {
                  if (curriculum.__component === "curriculum.lecture") {
                    return (
                      <Card key={curriculum.id}>
                        <CardHeader
                          id={curriculum.title}
                          aria-expanded={openedCollapse === curriculum.id}
                        >
                          <h5 className=" mb-0">
                            <Button
                              onClick={() =>
                                setOpenedCollapse(
                                  openedCollapse === curriculum.id
                                    ? ""
                                    : curriculum.id
                                )
                              }
                              className=" w-100 text-primary text-left"
                              color="link"
                            >
                              {curriculum.title}
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse
                          isOpen={openedCollapse === curriculum.id}
                          aria-labelledby={curriculum.title}
                          data-parent="#accordionExample"
                          id={curriculum.id}
                        >
                          <CardBody
                            className=" opacity-8"
                            dangerouslySetInnerHTML={{
                              __html: curriculum.dailymotionIframe,
                            }}
                          ></CardBody>
                        </Collapse>
                      </Card>
                    );
                  }
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return signIn();
  }
};

export default Course;
