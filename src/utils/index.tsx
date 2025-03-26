export function hasChildren(item: any) {
  const { next: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children === null) {
    return false;
  }

  return true;
}

export const flattenList = (item) => {
  let newItem = [...item];
  let poppedValue = null;
  let children = [];
  let obj = {};
  while (newItem.length) {
    poppedValue = newItem.shift();
    if (poppedValue.structure.length > 0) {
      let returnedValue = flattenList(poppedValue.structure);
      obj = {
        text: poppedValue.name || poppedValue.title,
        slug: poppedValue.slug,
        next: returnedValue,
      };
      children.push(obj);
    } else {
      children.push({
        text: poppedValue.name || poppedValue.title,
        slug: poppedValue.slug,
        next: null,
      });
    }
  }
  return children;
};

export const returnParent = (item, searchQuery, parent) => {
  let newItem = [...item];
  let poppedValue = null;

  while (newItem.length) {
    poppedValue = newItem.shift();
    if (poppedValue.slug === searchQuery) {
      return parent;
    } else {
      if (poppedValue.next && poppedValue.next.length > 0) {
        let result = returnParent(
          poppedValue.next,
          searchQuery,
          poppedValue.slug
        );
        if (result) {
          return result;
        }
      }
    }
  }

  return null;
};

// export const returnRoutes = (item, listOfRoutes = []) => {
//   if (!item) {
//     return;
//   }
//   let newItem = [...item];
//   let poppedValue = null;

//   while (newItem.length) {
//     poppedValue = newItem.shift();
//     listOfRoutes.push(
//       <Route path={`${poppedValue.slug}`} Component={ArticleSection} />
//     );
//     if (poppedValue.next && poppedValue.next.length > 0) {
//       returnRoutes(poppedValue.next, listOfRoutes);
//     }
//   }

//   return listOfRoutes;
// };

export const setupScrollspy = (element) => {
  const links = Array.from(element.querySelectorAll('a[href^="#"]'))
  const sections = Array.from(document.querySelectorAll('[data-toc-id]'))
  
  // console.log('links: ', links);
  // console.log('sections: ', sections);
  const observer = new IntersectionObserver(onIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: [1]
  })

  sections.forEach((section) => {
    section.removeAttribute('id')
    observer.observe(section)
  })

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const sectionId = link.getAttribute('href')
      console.log('sectionId: ', sectionId);
      history.pushState(null, null, sectionId)
      smoothScrollToSection(sectionId)
    })
  })

  // scrollToCurrentHash()

  // window.addEventListener('hashchange', scrollToCurrentHash)

  // function scrollToCurrentHash() {
  //   const sectionId = window.location.hash
  //   smoothScrollToSection(sectionId)
  // }

  function smoothScrollToSection(sectionId) {
    const section = sections.find(
      (section) => {
        console.log( 'smoothScrollToSection section: ', section.dataset);
        return `#${section.dataset.tocId}` === sectionId
      }
    )
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    })
  }

  function onIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target
        const sectionId = `#${section.dataset.tocId}`
        const link = links.find(
          (link) => link.getAttribute('href') === sectionId
        )
        highlightLink(link)
      }
    })
  }

  function highlightLink(targetLink) {
    links.forEach((link) => {
      if (link === targetLink) {
        link.style.color = '#4f46e5';
      } else {
        link.style.color = '#ffffff';
      }
    })
  }
}