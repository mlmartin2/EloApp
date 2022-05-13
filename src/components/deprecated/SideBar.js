function SideBar() {
    <head className='SideBar'>
        <div className='LogoContainer'>
            <img className="Logo" src={process.env.PUBLIC_URL + 'LogoEloFullUpdate.png'} />
        </div>
        <div className='SideButtonContainer'>
            <button className='SideButton'>LEADS</button>
            <Link to='../newlead'>
                <button className='SideButton ButtonGray'> NOVO LEAD</button>
            </Link>
            <Link to='../'>
                <button className='LogOutButton'>
                    SAIR
                </button>
            </Link>
        </div>
    </head>
}
