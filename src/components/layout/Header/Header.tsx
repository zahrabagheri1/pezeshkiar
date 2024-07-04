import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../../../public/img/favicon.svg'

const Header: React.FC = (): JSX.Element => {
    return (
        <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} py={"20px"}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={"30px"}>
                <Stack flexDirection={"row"} alignItems={"center"} gap={"5px"}>
                    <img width={"20px"} height={"20px"} src={logo} alt="" />
                    <Typography fontSize={'16px'} fontWeight='bold'>سامانه نوبت دهی پزشکیار </Typography>
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"} gap={"30px"}  >
                    <Typography fontSize={'14px'} fontWeight='bold'>تخصص ها</Typography>
                    <Typography fontSize={'14px'} fontWeight='bold'>نوبت دهی مطب</Typography>
                    <Typography fontSize={'14px'} fontWeight='bold'>جستجوی پزشک</Typography>
                    <Typography fontSize={'14px'} fontWeight='bold'>ارتباط با ما</Typography>
                </Stack>
            </Stack>

            <Button variant="contained" sx={{
                color: 'white',
                background: 'linear-gradient(to right , #6f3afa, #3a8ef6)',

            }}>ورود / ثبت نام</Button>
        </Stack>
    )
}

export default Header