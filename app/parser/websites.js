const cheerio = require("cheerio");
const rp = require("request-promise");

module.exports = {
  parser: function(cb) {
    const url = "https://merrier.wang/网址导航";

    const options = {
      uri: encodeURI(url),
      encoding: "utf8"
    };

    rp(options)
      .then(htmlString => {
        // Begin html parsing.

        const $ = cheerio.load(htmlString);
        const listDom = $("#navs").find(".items");
        const len = listDom.find(".item").length;
        let link_length = 0;
        const result = [];

        for (let i = 0; i < len; i++) {
          const item = listDom.find(".item").eq(i);
          const title = item.find("h2").text();
          const _listDom = item.find(".blogroll");
          const _len = _listDom.find("li").length;
          link_length += _len;

          const _temp = [];

          for (let j = 0; j < _len; j++) {
            const _item = _listDom
              .find("li")
              .eq(j)
              .find("a");
            const _desc = _item.attr("title");
            const _url = _item.attr("href");
            const _name = _item.text();

            _temp.push({
              desc: _desc,
              url: _url,
              name: _name
            });
          }

          const temp = {
            title,
            list: _temp
          };

          result.push(temp);
        }

        const json = {
          link_length,
          category_length: len,
          data: result
        };

        cb(json);
      })
      .catch(err => {
        cb(err);
      });
  }
};
