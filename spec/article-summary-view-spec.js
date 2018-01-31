function testCreateHtmlString() {

  var headline = new Headline("webTitle", "webUrl", "thumbnail");
  var articleSummary = new ArticleSummary(headline, ["summary"]);
  var articleSummaryView = new ArticleSummaryView(articleSummary);
console.log(articleSummaryView.createHtmlString())
  assert.isTrue(articleSummaryView.createHtmlString() === "<h1><a href='webUrl'>webTitle<img src=thumbnail></a></h1><p>summary</p>", "'createHtmlString' returns the headline and summary in html")
};
testCreateHtmlString();