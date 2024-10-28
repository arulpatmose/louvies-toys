import React from 'react';
import FooterWidgets from './modules/FooterWidgets';
import FooterCopyright from './modules/FooterCopyright';

const FooterFullwidth = () => (
    <footer className="ps-footer">
        <div>
            <FooterWidgets />
            <FooterCopyright />
        </div>
    </footer>
);

export default FooterFullwidth;
