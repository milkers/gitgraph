var gitgraph = new GitGraph({
  template: "blackarrow",//blackarrow | metro
  orientation: "vertical-reverse",
  // mode: "compact",
  author: "milkers"
});

var master = gitgraph.branch("master");
gitgraph.commit("Initial commit."); // 1 commit upon HEAD
gitgraph.commit("Configuration files are updated.");

var production = master.branch("production");
var integration = master.branch("integration");

production.commit("'areca_production' branch is created.");
integration.commit("'areca_integration' branch is created.");

integration.checkout();
var feat1 = integration.branch("feat1");

var commitConfig = {
  // dotColor: "white",
  // dotSize: 10,
  // dotStrokeWidth: 10,
  // messageHashDisplay: true,
  messageAuthorDisplay: true,
  message: "feat1 initial commit.",
  author: "dev_1"
};
feat1.commit(commitConfig);

var feat2 = integration.branch("feat2");
var commitConfig = {
  messageAuthorDisplay: true,
  message: "feat2 initial commit.",
  author: "dev_2"
};
feat2.commit(commitConfig);

// development on feat1
var commitConfig = {
  messageAuthorDisplay: true,
  message: "tts refactoring.",
  author: "dev_1"
};
feat1.commit(commitConfig);
var commitConfig = {
  messageAuthorDisplay: true,
  message: "periyod alani ondalik hale getirildi.",
  author: "dev_1"
};
feat1.commit(commitConfig);
var commitConfig = {
  messageAuthorDisplay: true,
  message: "tts file cache fix.",
  author: "dev_1"
};
feat1.commit(commitConfig);

// development on feat2
var commitConfig = {
  messageAuthorDisplay: true,
  message: "kist adiminda, abonenin son tarifesi bulmada sorun vardi. bu sorun duzeltildi.",
  author: "dev_2"
};
feat2.commit(commitConfig);
var commitConfig = {
  messageAuthorDisplay: true,
  message: "efatura arsiv asim base ucreti icin son abone ozellik kullanilacak.",
  author: "dev_2"
};
feat2.commit(commitConfig);
var commitConfig = {
  messageAuthorDisplay: true,
  message: "kalan ay faydasının yanlış hesaplanması ile ilgili sorun düzeltildi.",
  author: "dev_2"
};
feat2.commit(commitConfig);

// merge feat2 to integration
var commitConfig = {
  messageAuthorDisplay: true,
  message: "feat2 gelistirmesi sonlandirildi ve integration'a merge edildi.",
  author: "dev_2"
};
feat2.merge(integration, commitConfig);

// integration is merged with feat2, so it is changed.
// we should first merge integration to feat1.
var commitConfig = {
  messageAuthorDisplay: true,
  message: "güncellemeler için integration branchi pull edildi.",
  author: "dev_1"
};
integration.merge(feat1, commitConfig);

var commitConfig = {
  messageAuthorDisplay: true,
  message: "feat1 gelistirmesi testleri basariyla sonlandirildi.",
  author: "dev_1"
};
feat1.commit(commitConfig);

// merge feat1 to integration
var commitConfig = {
  messageAuthorDisplay: true,
  message: "feat1 gelistirmesi sonlandirildi.",
  author: "dev_1"
};
feat1.merge(integration, commitConfig);

// now integration is ready to merge with production.
// it is release time.
var commitConfig = {
  messageAuthorDisplay: true,
  message: "test tahakkuk asamasi icin release alindi.",
  author: "safak"
};
integration.merge(production, commitConfig);



function download() {
    var dt = gitGraph.toDataURL();
    this.href = dt; //this may not work in the future..
}
document.getElementById('download').addEventListener('click', download, false);
