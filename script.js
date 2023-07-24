function copyCode() {
    const codeText = document.querySelector('.code-text');
    const range = document.createRange();
    range.selectNode(codeText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    showCopiedMessage();
  }

  function showCopiedMessage() {
    const button = document.querySelector('.copy-button');
    button.textContent = 'Code Copied!';
    button.style.backgroundColor = '#555';
    setTimeout(() => {
      button.textContent = 'Copy Code';
      button.style.backgroundColor = '#04AA6D';
    }, 2000);
  }