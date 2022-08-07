import Editor from "../admin-components/Editor";

export const editorModules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        ["link", "image"],
        ["code-block"]
    ],
}

export const editorFormats = [
    'header', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', "code-block"
]

export const handleScroll = () => {
    if (window.scrollY > 50) {
        document.getElementById('topbar')?.classList.add('fixed-top');
        // add padding top to show content behind navbar
        const navbar_height = document.querySelector('.navbar')?.offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.getElementById('topbar') && document.getElementById('topbar').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
    }
}