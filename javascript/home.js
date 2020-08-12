function openNav() {
  document.getElementById("mysidenav").style.width = "140px";
  }
function closeNav() {
  document.getElementById("mysidenav").style.width = "0";
  }

  const name_results = [
    { name: "truedamageGIANTS" },
    { name: "don'tLocoHwasa" },
    { name: "alittlemessedupjune" },
    { name: "anysongZICO" },
    { name: "vintageNIKI" },
  ];

  const list = document.getElementById("list");

  function setList(group) {
    clearList();
    for (const name_result of group) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const para = document.createElement('p');
      item.classList.add('list-group-item');
      const text = document.createTextNode(name_result.name);
      link.appendChild(text);
      item.appendChild(link);
      list.appendChild(item);
      const result = link.textContent;
      if (result === "truedamageGIANTS"){
        link.setAttribute('href', 'truedmg.html');
      }
      else if (result === "don'tLocoHwasa"){
        link.setAttribute('href', 'dont.html');
      }
      else if (result === "alittlemessedupjune"){
        link.setAttribute('href', 'messedup.html');
      }
      else if (result === "anysongZICO"){
        link.setAttribute('href', 'anysong.html');
      }
      else if (result === "vintageNIKI"){
        link.setAttribute('href', 'vintage.html');
      }

    if (group.length === 0) {
      setNoResults();
      }
    };
  }
  function clearList() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  };

  function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    list.appendChild(text);
  };

  function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
      return 2;
    } else if (value.startsWith(searchTerm)) {
      return 1;
    } else if (value.includes(searchTerm)) {
      return 0;
    }
  };

  const searchInput = document.getElementById('search');


  searchInput.addEventListener('input', (event) => {
    console.log('input event fired');
    let value = event.target.value;
    if (value && value.trim(). length > 0) {
      value = value.trim().toLowerCase();
      setList(name_results.filter(name_result => {
        return name_result.name.includes(value);
      }).sort((target1, target2) => {
        return getRelevancy(target2.name, value) - getRelevancy(target1.name, value);
      }));
    } else {
      clearList();
    }
  });
