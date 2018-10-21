export default {
  items: [
    {
      name: 'Home',
      url: '/',
      icon: 'icon-home',
      badge: {
        variant: 'info',
        text: '',
      },
    },
    {
      title: true,
      name: 'Get Started',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Options Algorithm',
      url: '',
      icon: '',
    },
    {
      name: 'Options Dashboard',
      url: '',
      icon: '',
    },
    {
      name: 'Open Interest',
      url: '',
      icon: '',
    },
     {
      name: 'Volatility Skew',
      url: '',
      icon: '',
    },
     {
      name: 'Strategy Builder',
      url: '',
      icon: '',
    },
     {
      name: 'Results Calendar',
      url: '',
      icon: '',
    }
    ,
     {
      name: 'Historical Results',
      url: '',
      icon: '',
    }
  ],
};
