import dynamic from 'next/dynamic';

const Bundle = dynamic({
    modules: (props) => {
        const components = {
            Home: import('../components/pages/home'),
            About: import('../components/pages/about'),
            NotFound: import('../components/pages/notfound'),
        }
        return components
    },
    render: (props, { Home, About, NotFound }) => {
        if (props.url.page) {
            switch (props.url.page) {
                case "home":
                    return <Home />
                    break;
                case "about":
                    return <About />
                    break;
                default:
                    return <NotFound />
            }
        } else {
            return <Home />
        }
    }
});

export default Bundle;