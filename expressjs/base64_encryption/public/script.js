$(() => {
    let inpCode = $("#inpCode");
    let outCode = $("#outCode");
    let outEncryptCode = $("#outEncryptCode");
    let encoBtn = $("#encoBtn");
    let encrBtn = $("#encrBtn"); 

    encoBtn.click(() => {
        let data = inpCode.val();
        let encData = btoa(data);
        outCode.val(encData);
    });

    encrBtn.click(() => {
        let data = outCode.val();
        let encrpytData = data + '1';
        outEncryptCode.val(encrpytData);
    });
});