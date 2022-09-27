const verifyEmailTemplate=(data)=>(`<p>
you can download your ${data.semester} fee recipt from this given link
<br />
<a href="${data.link}">Download</a>
</p>`);

export default verifyEmailTemplate;