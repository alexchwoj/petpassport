// Load language into page
function load_language(lang_name)
{
    console.log(`Loading ${lang_name}.json...`);
    $.getJSON(`languages/${lang_name}.json`, function(json) {
        for (var key in json)
        {
            try {
                var elements = document.querySelectorAll(`[lang-data="${key}"]`);
                for (var i = 0; i < elements.length; ++i)
                {
                    elements[i].innerHTML = json[key];
                }
            } catch { };
        }

        console.log(`Language loaded!`);
    });
}

function refresh_language()
{
    var lang = localStorage.getItem('lang');
    if (!lang) lang = "spanish";
    load_language(lang);
}