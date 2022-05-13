import SidebarButton from "./SidebarButton"

export default function SidebarView(props) {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 5 }}>
                <div style={{ flex: 1, textAlign: 'center', width: '100%', maxWidth: 210, minHeight: '100vh', backgroundColor: '#171b1c' }}>
                    <img style={{ width: '60%' }} src="/logoelo.png" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ paddingTop: 20 }} />
                        <SidebarButton selected={props.screen == '/'? true : false} className='Border BorderlessTop BorderlessLeft BorderlessRight' text='Leads' navigateTo={'/'} />
                        <SidebarButton selected={props.screen == 'newlead'? true : false} className='Borderless' text='Cadastrar Lead' navigateTo={'/newlead'}/>
                        <div style={{ paddingTop: 5 }} />
                    </div>
                </div>
                {props.children}
            </div>
        </>
    )
}