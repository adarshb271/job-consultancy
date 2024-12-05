import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import './TermsAndConditions.css';

const TermsAndConditions = () => {
    // Initialize the default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <div className="pdf-viewer">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl="/images/TERMS AND CONDITIONS.pdf
" // Replace with your PDF file's path
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    );
};

export default TermsAndConditions;
