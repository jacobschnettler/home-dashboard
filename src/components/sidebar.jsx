import { silentUpdate } from '../utils'

export const Sidebar = ({ height, width, page }) => {
    const [Page, setPage] = page

    const sidebarItems = [
        {
            icon: <i className="fas fa-home"></i>,
            page: 'home'
        },
        {
            icon: <i className="fas fa-camera"></i>,
            page: 'security'
        },
        {
            icon: <i className="fas fa-running"></i>,
            page: 'fitness'
        }
    ]

    return (
        <div style={{ height: height, width: width, textAlign: 'center' }} className="bg-body-tertiary">
            <div style={{ paddingTop: '15px' }}>
                {sidebarItems.map((item, index) => (
                    <div key={index} style={{ paddingBottom: '15px' }}>
                        <a
                            href='#'
                            style={{ fontSize: "30px" }}
                            onClick={function (e) {
                                e.preventDefault()
                                silentUpdate('?page=' + item.page)
                                setPage(item.page)
                            }}
                        >
                            {item.icon}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}