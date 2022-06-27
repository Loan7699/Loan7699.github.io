import { useEffect, useState } from "react";

function Avatar(props) {
    console.log('re-render');

    const [avatar, setAvatar] = useState('');

    useEffect(() => {

        // hàm cleanup: khi chọn ảnh khác, xóa ảnh cũ
        return () => {
            URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.file[0];

        console.log(URL.createObjectURL(file));
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }

    return (
        <div>
            <input
                type='file'
                onChange={handlePreviewAvatar}
            />

            {avatar && (
                <img src={avatar.preview} alt="Nothing" style={{width: 400}}/>
            )}
        </div>
    )
}

export default Avatar;