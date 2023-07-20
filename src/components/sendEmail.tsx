import emailjs from '@emailjs/browser';

export interface emailProps {
    userName: string;
    requirements: string;
    business: string;
    contact: string;
}

export default function SendEmail(props: emailProps) {

    let templateParams = {
        userName: 'Name: ' + props.userName,
        business: 'Business: ' + props.business,
        contact: 'Contact: ' + props.contact,
        requirements: 'Requirements: ' + props.requirements,
    };
    
    emailjs.send('service_mo5n7no', 'template_q67a8th', templateParams, 'jcIvuiN_P6vT6a6GE')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
}