import { Route } from 'react-router-dom';

const DashboardLayout = ({ children, ...rest }) => {
    return (
        <div className='page page-dashboard'>
            <header>
                <h1>Dashboard</h1>
                <p>The agent dashboard has 3 parts, a side menu, a top bar and content area to render components.</p>
            </header>
            <section>
                <nav>
                    <p>
                        DashboardLayout.js contains a higher order component (HOC) that
                        takes a component as a prop and passes it into a `Route` from
                        react-router-dom.
          </p>
                    <p>
                        The specific path for the component being passed to the HOC is
                        passed to the Route in the spread ...rest .
          </p>
                </nav>
                <article>{children}</article>
            </section>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <DashboardLayout>
                    <Component {...props} />
                </DashboardLayout>
            )}
        />
    );
};

export default DashboardLayoutRoute;