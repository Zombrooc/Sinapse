import React, { Component } from "react";
// import { Document, Page } from "react-pdf";
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

export default class App extends Component {


  
  render() {
    console.log(this.props.pdfURL);

    return (
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "750px",
            }}
          >
            <Viewer fileUrl={this.props.pdfURL} />
          </div>
          
        </Worker>
      </div>
    );
  }
}
