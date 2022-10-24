import MyPhoto from '../ME.jpg';
export default function ProfilePhoto () {
    return (
        <div>
            <img className='myPhoto' src={MyPhoto} alt="" />
        </div>

    );
}