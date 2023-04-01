import CloseIcon from '@mui/icons-material/Close'
import { CardContent } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { TransitionProps } from '@mui/material/transitions'
import * as React from 'react'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'

function CropDemo({ src, onCropped }: any) {
    const IMG_SCALE_TO = 256
    const img = React.useRef() as any
    const [crop, setCrop] = React.useState<Crop | undefined>()

    React.useEffect(() => {
        setCrop(undefined)
    }, [src])

    const onComplete = (crop: PixelCrop) => {
        if (crop.height < 10 || crop.width < 10) return

        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!
        canvas.width = canvas.height = IMG_SCALE_TO

        ctx.drawImage(
            img.current!,
            ((crop.x / img.current.width) * img.current.naturalWidth) | 0,
            ((crop.y / img.current.height) * img.current.naturalHeight) | 0,
            ((crop.width / img.current.width) * img.current.naturalWidth) | 0,
            ((crop.height / img.current.height) * img.current.naturalHeight) | 0,
            0,
            0,
            IMG_SCALE_TO,
            IMG_SCALE_TO,
        )

        onCropped(canvas)
    }

    return (
        <div style={{ position: 'fixed', width: '100svw' }}>
            <ReactCrop aspect={1 / 1} circularCrop keepSelection crop={crop} onChange={setCrop} onComplete={onComplete}>
                <img src={src} ref={img} />
            </ReactCrop>
        </div>
    )
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default ({ open, closeClicked, onReadyUrl }: any) => {
    const [imageUrl, setImageUrl] = React.useState<string>()
    const [canvas, setCanvas] = React.useState<HTMLCanvasElement>()

    const chooseAgain = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = (e: any) => {
            const file = e.target.files[0]
            if (!file) return
            const url = URL.createObjectURL(file)! as string
            setImageUrl(url)
        }
        input.click()
    }
    React.useEffect(() => {
        if (open) {
            chooseAgain()
        }
    }, [open])

    const handleClose = () => {
        closeClicked()
    }

    const handleSave = () => {
        if (!canvas) return
        const src = canvas.toDataURL('image/jpg', 98)
        onReadyUrl(src)
        closeClicked()
    }

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Wybierz i wytnij obraz
                    </Typography>
                    <Button disabled={!canvas} autoFocus color="inherit" onClick={handleSave}>
                        Zapisz
                    </Button>
                </Toolbar>
            </AppBar>
            <CardContent>
                {imageUrl ? (
                    <CropDemo src={imageUrl} onCropped={setCanvas}></CropDemo>
                ) : (
                    <Button autoFocus color="inherit" onClick={chooseAgain}>
                        Wybierz
                    </Button>
                )}
            </CardContent>
        </Dialog>
    )
}
