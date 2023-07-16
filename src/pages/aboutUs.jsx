import ComponentWithConsole, { WithmyReklamaComponent} from '../components/books/ComponentWithConsole';
import MyWrappedComponent from '../components/books/WrappedComponent';

export default () => {
    const users = ['vasya', 'petya'];
    const myusers = ['Valeria', 'Svyatoslav', 'Roman']
    return (
        <div>
            <MyWrappedComponent y={1}/>
            {
                ['cat', 'dog', 'cow', 'bird'].map((item, i) => {
                    return <ComponentWithConsole
                                item={item}
                                position={i+ 1}/>
                })
            }
            {/* <WithmyReklamaComponent user={users[0]}/>
            <WithmyReklamaComponent user={users[1]}/> */}
            <WithmyReklamaComponent myuser={myusers[0]}/>
            <WithmyReklamaComponent myuser={myusers[1]}/>
            <WithmyReklamaComponent myuser={myusers[2]}/>
        </div>
    )
}