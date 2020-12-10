import { Component } from 'react';
import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

function BlogShareModal (props) {

    const currentPage = window.location.url;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Share the article
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="d-flex justify-content-center">
                <WhatsappShareButton url={currentPage}>
                    <WhatsappIcon round={true} />
                </WhatsappShareButton>
                <TwitterShareButton url={currentPage}>
                    <TwitterIcon round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={currentPage}>
                    <FacebookIcon round={true} />
                </FacebookShareButton>
                <EmailShareButton url={currentPage}>
                    <EmailIcon round={true} />
                </EmailShareButton>
                <RedditShareButton url={currentPage}>
                    <RedditIcon round={true} />
                </RedditShareButton>
                <TelegramShareButton url={currentPage}>
                    <TelegramIcon round={true} />
                </TelegramShareButton>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BlogShareModal;