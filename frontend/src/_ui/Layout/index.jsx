import React from 'react';
import { Link } from 'react-router-dom';
import useRouter from '@/_hooks/use-router';
import { ToolTip } from '@/_components/ToolTip';
import { Profile } from '@/_components/Profile';
import { authenticationService } from '@/_services';
import { NotificationCenter } from '@/_components/NotificationCenter';
import Header from '../Header';

function Layout({ children, switchDarkMode, darkMode }) {
  const currentUser = authenticationService.currentUserValue;
  const router = useRouter();

  return (
    <div className="row m-auto">
      <div className="col-auto p-0">
        <aside className="left-sidebar p-2 h-100" style={{ borderRight: !darkMode ? '1px solid #eee' : 'inherit' }}>
          <div className="application-brand">
            <Link to="/">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.587891 6.66479C0.587891 3.35634 3.26992 0.674316 6.57837 0.674316H22.5974C25.9059 0.674316 28.5879 3.35635 28.5879 6.6648V22.6838C28.5879 25.9923 25.9059 28.6743 22.5974 28.6743H6.57837C3.26991 28.6743 0.587891 25.9923 0.587891 22.6838V6.66479Z"
                  fill="#3E63DD"
                />
                <path
                  d="M19.2726 8.73448V10.6128C19.2726 10.6784 19.2196 10.732 19.1548 10.732H15.7763V20.6137C15.7763 20.6795 15.7232 20.733 15.6584 20.733H13.5082C13.4433 20.733 13.3903 20.6794 13.3903 20.6137V10.732H10.0202C9.95534 10.732 9.90234 10.6784 9.90234 10.6128V8.73448C9.90234 8.66895 9.95544 8.61523 10.0202 8.61523H19.1548C19.2196 8.61523 19.2726 8.66895 19.2726 8.73448Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <hr style={{ margin: '0 -8px' }} />
          <div>
            <ul className="sidebar-inner nav nav-vertical">
              <li className="text-center mt-3 cursor-pointer">
                <Link to="/">
                  <ToolTip message="Dashboard" placement="right">
                    <svg
                      className="layout-sidebar-icon"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="4" fill={router.pathname === '/' ? '#E6EDFE' : 'none'} />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 9C7 7.89543 7.89543 7 9 7H13C14.1046 7 15 7.89543 15 9V13C15 14.1046 14.1046 15 13 15H9C7.89543 15 7 14.1046 7 13V9ZM13 9H9V13H13V9ZM21 7C21.5523 7 22 7.44772 22 8V10H24C24.5523 10 25 10.4477 25 11C25 11.5523 24.5523 12 24 12H22V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V12H18C17.4477 12 17 11.5523 17 11C17 10.4477 17.4477 10 18 10H20V8C20 7.44772 20.4477 7 21 7ZM7 19C7 17.8954 7.89543 17 9 17H13C14.1046 17 15 17.8954 15 19V23C15 24.1046 14.1046 25 13 25H9C7.89543 25 7 24.1046 7 23V19ZM13 19H9V23H13V19ZM17 19C17 17.8954 17.8954 17 19 17H23C24.1046 17 25 17.8954 25 19V23C25 24.1046 24.1046 25 23 25H19C17.8954 25 17 24.1046 17 23V19ZM19 19V23H23V19H19Z"
                        fill={router.pathname === '/' ? '#3E63DD' : '#C1C8CD'}
                      />
                    </svg>
                  </ToolTip>
                </Link>
              </li>
              <li className="text-center mt-3 cursor-pointer">
                <Link to="/tooljet-database">
                  <ToolTip message="Tooljet database" placement="right">
                    <svg
                      className="layout-sidebar-icon"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.325684"
                        width="32"
                        height="32"
                        rx="4"
                        fill={router.pathname === '/tooljet-database' ? '#E6EDFE' : '#none'}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 9.32568C9.73478 9.32568 9.48043 9.43104 9.29289 9.61858C9.10536 9.80611 9 10.0605 9 10.3257V13.3257H13V9.32568H10ZM10 7.32568C9.20435 7.32568 8.44129 7.64175 7.87868 8.20436C7.31607 8.76697 7 9.53003 7 10.3257V16.3257C7 16.878 7.44772 17.3257 8 17.3257C8.55228 17.3257 9 16.878 9 16.3257V15.3257H13V16.3257C13 16.878 13.4477 17.3257 14 17.3257C14.5523 17.3257 15 16.878 15 16.3257V15.3257H23V22.3257C23 22.5909 22.8946 22.8453 22.7071 23.0328C22.5196 23.2203 22.2652 23.3257 22 23.3257H16C15.4477 23.3257 15 23.7734 15 24.3257C15 24.878 15.4477 25.3257 16 25.3257H22C22.7957 25.3257 23.5587 25.0096 24.1213 24.447C24.6839 23.8844 25 23.1213 25 22.3257V10.3257C25 9.53003 24.6839 8.76697 24.1213 8.20436C23.5587 7.64175 22.7957 7.32568 22 7.32568H10ZM15 9.32568V13.3257H23V10.3257C23 10.0605 22.8946 9.80611 22.7071 9.61858C22.5196 9.43104 22.2652 9.32568 22 9.32568H15ZM6 20.3257C6 19.2211 6.89543 18.3257 8 18.3257H12C13.1046 18.3257 14 19.2211 14 20.3257V24.3257C14 25.4303 13.1046 26.3257 12 26.3257H8C6.89543 26.3257 6 25.4303 6 24.3257V20.3257ZM8 20.3257V24.3257H12V20.3257H8Z"
                        fill={router.pathname === '/tooljet-database' ? '#3E63DD' : '#C1C8CD'}
                      />
                    </svg>
                  </ToolTip>
                </Link>
              </li>
              <li className="text-center mt-3 cursor-pointer">
                <Link to="/organization-settings">
                  <ToolTip message="Organization settings" placement="right">
                    <svg
                      className="layout-sidebar-icon"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.326172"
                        width="32"
                        height="32"
                        rx="4"
                        fill={router.pathname === '/organization-settings' ? '#E6EDFE' : '#none'}
                      />
                      <g clipPath="url(#clip0_453_63684)">
                        <path
                          d="M16.0005 26.3262C14.7205 26.3262 13.6505 25.4862 13.3505 24.2462C13.2605 23.8562 12.8705 23.6262 12.4705 23.7162C12.4005 23.7362 12.3305 23.7662 12.2605 23.8062C11.1705 24.4762 9.82047 24.3062 8.92047 23.4062C8.01047 22.4962 7.85047 21.1562 8.52047 20.0662C8.62047 19.8962 8.65047 19.7062 8.60047 19.5162C8.55047 19.3262 8.44047 19.1662 8.27047 19.0662C8.21047 19.0262 8.14047 18.9962 8.06047 18.9762C6.82047 18.6762 5.98047 17.6062 5.98047 16.3262C5.98047 15.0462 6.82047 13.9762 8.06047 13.6762C8.45047 13.5862 8.69047 13.1862 8.59047 12.8062C8.57047 12.7362 8.54047 12.6662 8.50047 12.5962C7.83047 11.5062 7.99047 10.1562 8.90047 9.25617C9.81047 8.34617 11.1505 8.18617 12.2405 8.85617C12.4405 8.97617 12.6805 8.99617 12.8905 8.90617C13.1005 8.81617 13.2605 8.63617 13.3205 8.40617C13.6205 7.16617 14.6905 6.32617 15.9705 6.32617C17.2505 6.32617 18.3105 7.16617 18.6205 8.40617C18.7105 8.79617 19.1105 9.03617 19.4905 8.93617C19.5605 8.91617 19.6305 8.88617 19.7005 8.84617C20.8005 8.17617 22.1405 8.34617 23.0405 9.24617C23.9505 10.1562 24.1105 11.4962 23.4405 12.5862C23.3405 12.7562 23.3105 12.9462 23.3505 13.1362C23.3905 13.3262 23.5105 13.4862 23.6805 13.5862C23.7405 13.6262 23.8105 13.6562 23.8905 13.6662C25.1305 13.9662 25.9705 15.0362 25.9705 16.3162C25.9705 17.5962 25.1305 18.6562 23.8905 18.9662C23.5005 19.0562 23.2605 19.4562 23.3605 19.8362C23.3805 19.9062 23.4105 19.9762 23.4505 20.0462C24.1205 21.1362 23.9505 22.4862 23.0505 23.3862C22.1505 24.2862 20.8005 24.4562 19.7105 23.7862C19.5405 23.6862 19.3505 23.6562 19.1605 23.6962C18.9705 23.7362 18.8105 23.8562 18.7105 24.0262C18.6705 24.0962 18.6405 24.1562 18.6205 24.2362C18.3205 25.4762 17.2505 26.3162 15.9705 26.3162L16.0005 26.3262ZM12.6505 21.6962C13.8805 21.6962 15.0005 22.5362 15.3005 23.7762C15.4205 24.2862 15.8705 24.3262 16.0005 24.3262C16.1305 24.3262 16.5805 24.2862 16.7005 23.7762C16.7705 23.4962 16.8705 23.2362 17.0205 22.9962C17.4005 22.3762 17.9905 21.9362 18.7005 21.7662C19.4105 21.5962 20.1405 21.7062 20.7605 22.0862C21.2105 22.3562 21.5505 22.0762 21.6505 21.9762C21.7405 21.8862 22.0305 21.5362 21.7605 21.0862C21.6105 20.8462 21.5005 20.5862 21.4405 20.3062C21.0905 18.8462 21.9905 17.3762 23.4405 17.0162C23.9505 16.8962 23.9905 16.4462 23.9905 16.3162C23.9905 16.1862 23.9505 15.7362 23.4405 15.6162C23.1705 15.5462 22.9105 15.4462 22.6705 15.2962C22.0505 14.9162 21.6105 14.3162 21.4405 13.6162C21.2705 12.9062 21.3805 12.1762 21.7605 11.5562C22.0305 11.1062 21.7505 10.7662 21.6505 10.6662C21.5605 10.5762 21.2105 10.2862 20.7605 10.5562C20.5205 10.7062 20.2605 10.8162 19.9805 10.8762C18.5205 11.2262 17.0505 10.3262 16.6905 8.86617C16.5705 8.35617 16.1205 8.31617 15.9905 8.31617C15.8605 8.31617 15.4105 8.35617 15.2905 8.86617C15.0805 9.71617 14.5005 10.4062 13.6905 10.7362C12.8805 11.0762 11.9805 11.0062 11.2305 10.5462C10.7805 10.2762 10.4305 10.5562 10.3405 10.6562C10.2505 10.7462 9.96047 11.0962 10.2305 11.5462C10.3805 11.7862 10.4905 12.0462 10.5505 12.3262C10.9005 13.7862 10.0005 15.2662 8.54047 15.6162C8.03047 15.7362 7.99047 16.1862 7.99047 16.3162C7.99047 16.4462 8.03047 16.8962 8.54047 17.0162C8.82047 17.0862 9.08047 17.1962 9.32047 17.3362C10.6005 18.1162 11.0105 19.7962 10.2305 21.0762C9.96047 21.5262 10.2405 21.8662 10.3405 21.9662C10.4405 22.0662 10.7805 22.3462 11.2305 22.0762C11.4705 21.9262 11.7305 21.8162 12.0105 21.7562C12.2205 21.7062 12.4405 21.6762 12.6505 21.6762V21.6962Z"
                          fill={router.pathname === '/organization-settings' ? '#3E63DD' : '#C1C8CD'}
                        />
                        <path
                          d="M16.0005 20.3262C13.7905 20.3262 12.0005 18.5362 12.0005 16.3262C12.0005 14.1162 13.7905 12.3262 16.0005 12.3262C18.2105 12.3262 20.0005 14.1162 20.0005 16.3262C20.0005 18.5362 18.2105 20.3262 16.0005 20.3262ZM16.0005 14.3262C14.9005 14.3262 14.0005 15.2262 14.0005 16.3262C14.0005 17.4262 14.9005 18.3262 16.0005 18.3262C17.1005 18.3262 18.0005 17.4262 18.0005 16.3262C18.0005 15.2262 17.1005 14.3262 16.0005 14.3262Z"
                          fill={router.pathname === '/organization-settings' ? '#3E63DD' : '#C1C8CD'}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_453_63684">
                          <rect width="20" height="20" fill="white" transform="translate(6 6.32617)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </ToolTip>
                </Link>
              </li>
              {currentUser?.super_admin && (
                <li className="text-center mt-3 cursor-pointer">
                  <Link to="/instance-settings">
                    <ToolTip message="Instance settings" placement="right">
                      <svg
                        className="layout-sidebar-icon"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.326172"
                          width="32"
                          height="32"
                          rx="4"
                          fill={router.pathname === '/instance-settings' ? '#E6EDFE' : '#none'}
                        />
                        <g clipPath="url(#clip0_453_63684)">
                          <path
                            d="M16.0005 26.3262C14.7205 26.3262 13.6505 25.4862 13.3505 24.2462C13.2605 23.8562 12.8705 23.6262 12.4705 23.7162C12.4005 23.7362 12.3305 23.7662 12.2605 23.8062C11.1705 24.4762 9.82047 24.3062 8.92047 23.4062C8.01047 22.4962 7.85047 21.1562 8.52047 20.0662C8.62047 19.8962 8.65047 19.7062 8.60047 19.5162C8.55047 19.3262 8.44047 19.1662 8.27047 19.0662C8.21047 19.0262 8.14047 18.9962 8.06047 18.9762C6.82047 18.6762 5.98047 17.6062 5.98047 16.3262C5.98047 15.0462 6.82047 13.9762 8.06047 13.6762C8.45047 13.5862 8.69047 13.1862 8.59047 12.8062C8.57047 12.7362 8.54047 12.6662 8.50047 12.5962C7.83047 11.5062 7.99047 10.1562 8.90047 9.25617C9.81047 8.34617 11.1505 8.18617 12.2405 8.85617C12.4405 8.97617 12.6805 8.99617 12.8905 8.90617C13.1005 8.81617 13.2605 8.63617 13.3205 8.40617C13.6205 7.16617 14.6905 6.32617 15.9705 6.32617C17.2505 6.32617 18.3105 7.16617 18.6205 8.40617C18.7105 8.79617 19.1105 9.03617 19.4905 8.93617C19.5605 8.91617 19.6305 8.88617 19.7005 8.84617C20.8005 8.17617 22.1405 8.34617 23.0405 9.24617C23.9505 10.1562 24.1105 11.4962 23.4405 12.5862C23.3405 12.7562 23.3105 12.9462 23.3505 13.1362C23.3905 13.3262 23.5105 13.4862 23.6805 13.5862C23.7405 13.6262 23.8105 13.6562 23.8905 13.6662C25.1305 13.9662 25.9705 15.0362 25.9705 16.3162C25.9705 17.5962 25.1305 18.6562 23.8905 18.9662C23.5005 19.0562 23.2605 19.4562 23.3605 19.8362C23.3805 19.9062 23.4105 19.9762 23.4505 20.0462C24.1205 21.1362 23.9505 22.4862 23.0505 23.3862C22.1505 24.2862 20.8005 24.4562 19.7105 23.7862C19.5405 23.6862 19.3505 23.6562 19.1605 23.6962C18.9705 23.7362 18.8105 23.8562 18.7105 24.0262C18.6705 24.0962 18.6405 24.1562 18.6205 24.2362C18.3205 25.4762 17.2505 26.3162 15.9705 26.3162L16.0005 26.3262ZM12.6505 21.6962C13.8805 21.6962 15.0005 22.5362 15.3005 23.7762C15.4205 24.2862 15.8705 24.3262 16.0005 24.3262C16.1305 24.3262 16.5805 24.2862 16.7005 23.7762C16.7705 23.4962 16.8705 23.2362 17.0205 22.9962C17.4005 22.3762 17.9905 21.9362 18.7005 21.7662C19.4105 21.5962 20.1405 21.7062 20.7605 22.0862C21.2105 22.3562 21.5505 22.0762 21.6505 21.9762C21.7405 21.8862 22.0305 21.5362 21.7605 21.0862C21.6105 20.8462 21.5005 20.5862 21.4405 20.3062C21.0905 18.8462 21.9905 17.3762 23.4405 17.0162C23.9505 16.8962 23.9905 16.4462 23.9905 16.3162C23.9905 16.1862 23.9505 15.7362 23.4405 15.6162C23.1705 15.5462 22.9105 15.4462 22.6705 15.2962C22.0505 14.9162 21.6105 14.3162 21.4405 13.6162C21.2705 12.9062 21.3805 12.1762 21.7605 11.5562C22.0305 11.1062 21.7505 10.7662 21.6505 10.6662C21.5605 10.5762 21.2105 10.2862 20.7605 10.5562C20.5205 10.7062 20.2605 10.8162 19.9805 10.8762C18.5205 11.2262 17.0505 10.3262 16.6905 8.86617C16.5705 8.35617 16.1205 8.31617 15.9905 8.31617C15.8605 8.31617 15.4105 8.35617 15.2905 8.86617C15.0805 9.71617 14.5005 10.4062 13.6905 10.7362C12.8805 11.0762 11.9805 11.0062 11.2305 10.5462C10.7805 10.2762 10.4305 10.5562 10.3405 10.6562C10.2505 10.7462 9.96047 11.0962 10.2305 11.5462C10.3805 11.7862 10.4905 12.0462 10.5505 12.3262C10.9005 13.7862 10.0005 15.2662 8.54047 15.6162C8.03047 15.7362 7.99047 16.1862 7.99047 16.3162C7.99047 16.4462 8.03047 16.8962 8.54047 17.0162C8.82047 17.0862 9.08047 17.1962 9.32047 17.3362C10.6005 18.1162 11.0105 19.7962 10.2305 21.0762C9.96047 21.5262 10.2405 21.8662 10.3405 21.9662C10.4405 22.0662 10.7805 22.3462 11.2305 22.0762C11.4705 21.9262 11.7305 21.8162 12.0105 21.7562C12.2205 21.7062 12.4405 21.6762 12.6505 21.6762V21.6962Z"
                            fill={router.pathname === '/instance-settings' ? '#3E63DD' : '#C1C8CD'}
                          />
                          <path
                            d="M16.0005 20.3262C13.7905 20.3262 12.0005 18.5362 12.0005 16.3262C12.0005 14.1162 13.7905 12.3262 16.0005 12.3262C18.2105 12.3262 20.0005 14.1162 20.0005 16.3262C20.0005 18.5362 18.2105 20.3262 16.0005 20.3262ZM16.0005 14.3262C14.9005 14.3262 14.0005 15.2262 14.0005 16.3262C14.0005 17.4262 14.9005 18.3262 16.0005 18.3262C17.1005 18.3262 18.0005 17.4262 18.0005 16.3262C18.0005 15.2262 17.1005 14.3262 16.0005 14.3262Z"
                            fill={router.pathname === '/instance-settings' ? '#3E63DD' : '#C1C8CD'}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_453_63684">
                            <rect width="20" height="20" fill="white" transform="translate(6 6.32617)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </ToolTip>
                  </Link>
                </li>
              )}
              <li className="m-auto">
                <NotificationCenter />
                <Profile switchDarkMode={switchDarkMode} darkMode={darkMode} />
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="col p-0">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
