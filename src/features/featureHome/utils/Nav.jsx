// import test from '../../../assets/test.zip';

export function download(e) {
    e.preventDefault();

    const link = document.createElement('a');
        link.href = '/WorkLink.apk'; // doit pointer vers /public/WorkLink.apk
        link.setAttribute('download', 'WorkLink.apk');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}