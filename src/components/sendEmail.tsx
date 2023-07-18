import emailjs from '@emailjs/browser';

export interface emailProps {
    industry: string;
    budget: string;
    phoneNumber: string;
}

export default function SendEmail(props: emailProps) {

    let templateParams = {
        industry: 'Industry: ' + props.industry,
        budget: 'Budget: ' + props.budget,
        phoneNumber: 'Phone Number: ' + props.phoneNumber
    };
    
    emailjs.send('service_mo5n7no', 'template_q67a8th', templateParams, 'jcIvuiN_P6vT6a6GE')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
}