import { Link } from 'react-router-dom';
import { navigationPages } from '../data';
const NavBar = () => {
    return (
        <nav className="bg-gray-800 w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigationPages.map((page, idx) =>
                                    (<Link key={idx} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to={page.linkTo}>{page.title}</Link>)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" to="/">Home</Link>
                    <Link className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/quotes">Quotes</Link>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;