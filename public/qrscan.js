window.onload = function() {
  const defaultLiffId = *****;
  initializeLiff(defaultLiffId);
};

function initializeLiff(defaultLiffId) {
  liff
  .init({
      liffId: defaultLiffId
  })
  .then(() => {
      liff.scanCodeV2().then(result => {
          const stringifiedResult = result.value;
          if(stringifiedResult.length > 58) stringifiedResult = stringifiedResult.substring(58)
          liff.sendMessages([{
              'type': 'text',
              'text': stringifiedResult
          }]).then(() => {
              liff.closeWindow();
          }).catch((error) => {
              window.alert('Error sending message: ' + error);
          });
      }).catch(err => {
          window.alert('scanCode failed!');
      });
  })
  .catch((err) => {
      window.alert('Something went wrong with LIFF initialization.');
  });
}
