var urls = {
    "Anonymous Pro": "http://www.marksimonson.com/fonts/view/anonymous-pro",
    "Bitstream Vera Sans Mono": "https://www.gnome.org/fonts/",
    "Courier Prime": "http://quoteunquoteapps.com/courierprime/",
    "DejaVu Sans Mono": "http://dejavu-fonts.org/",
    "Dina": "https://www.donationcoder.com/Software/Jibz/Dina/",
    "Envy Code R": "https://damieng.com/blog/2008/05/26/envy-code-r-preview-7-coding-font-released",
    "Fantasque Sans Mono": "https://github.com/belluzj/fantasque-sans",
    "Fira Mono": "https://mozilla.github.io/Fira/",
    "FixedSys Excelsior 3.01": "http://www.fixedsysexcelsior.com/",
    "Hermit": "https://pcaro.es/p/hermit/",
    "Inconsolata-dz": "http://nodnod.net/2009/feb/12/adding-straight-single-and-double-quotes-inconsola/",
    "Input": "http://input.fontbureau.com/",
    "Iosevka": "http://be5invis.github.io/Iosevka/",
    "Liberation Mono": "https://fedorahosted.org/liberation-fonts/",
    "Luculent": "Luculent",
    "M+ 1m light": "http://mplus-fonts.osdn.jp/mplus-outline-fonts/index-en.html",
    "M+ 1m medium": "http://mplus-fonts.osdn.jp/mplus-outline-fonts/index-en.html",
    "M+ 1m regular": "http://mplus-fonts.osdn.jp/mplus-outline-fonts/index-en.html",
    "Meslo LG L": "https://github.com/andreberg/Meslo-Font",
    "Meslo LG M": "https://github.com/andreberg/Meslo-Font",
    "Meslo LG S": "https://github.com/andreberg/Meslo-Font",
    "Monofur": "http://eurofurence.net/monofur.html",
    "Monoid": "http://larsenwork.com/monoid/",
    "monoOne": "https://github.com/madmalik/monoOne",
    "OCR A Extended": "http://cooltext.com/Download-Font-OCR+A+Extended",
    "Office Code Pro": "https://github.com/nathco/office-code-pro",
    "Office Code Pro Light": "https://github.com/nathco/office-code-pro",
    "Office Code Pro Medium": "https://github.com/nathco/office-code-pro",
    "OpenDyslexicMono": "http://opendyslexic.org/",
    "PragmataPro": "http://www.fsd.it/fonts/pragmatapro.htm",
    "ProFontWindows": "http://tobiasjung.name/profont/",
    "ProggyClean": "http://www.proggyfonts.net/",
    "Source Code Pro": "http://adobe-fonts.github.io/source-code-pro/",
    "Source Code Pro Light": "http://adobe-fonts.github.io/source-code-pro/",
    "Source Code Pro Medium": "http://adobe-fonts.github.io/source-code-pro/",
    "Terminus": "http://terminus-font.sourceforge.net/",
    "Ubuntu Mono": "http://font.ubuntu.com/"
};

module.exports = React.createClass({
    selectFont(fontName){
        this.props.selectFont(fontName);
    },
    render: function(){
        var font_rows = [];
        for(let i=0; i<fontList.length; i++){
            let fontName = fontList[i];
            var aaMode;
            //console.log(fontName);
            if(this.props.useAA==="on")
                aaMode = (fontInfos[fontName]["sizes_aa1"].indexOf(fontInfos[fontName].defaultSize)!==-1? "aa1" : "aa0");
            else
                aaMode = "aa0";

            var fontElement;
            if(fontName in urls){
                fontElement = <td><a href={urls[fontName]}>{fontName}</a></td>;
            }else{
                fontElement = <td>{fontName}</td>;
            }
            font_rows.push(
                <tr key={i}>
                    {fontElement}
                    <td className={"aa_mode "+aaMode}></td>
                    <td>
                        <input
                            type="checkbox"
                            checked={this.props.selectedFonts.has(fontName)}
                            onChange={this.selectFont.bind(null, fontName)}
                            />
                    </td>
                    <td>
                        <img src={"trimmed/"+this.props.renderer+"/short_"+this.props.theme.toLowerCase()+"_"+fontName+"_"+fontInfos[fontName].defaultSize+"_"+aaMode+".png"} />
                    </td>
                </tr>
            )
        }

        return(
            <table>
                <tbody>
                {font_rows}
                </tbody>
            </table>
        );
    }
});
