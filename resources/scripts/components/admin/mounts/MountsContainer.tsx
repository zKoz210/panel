<<<<<<< HEAD
import Button from '@/components/elements/Button';
=======
>>>>>>> a64c0392531cdd0a94a7ddf38606470b4acd3207
import React from 'react';
import tw from 'twin.macro';
import AdminContentBlock from '@/components/admin/AdminContentBlock';

export default () => {
    return (
        <AdminContentBlock>
<<<<<<< HEAD
            <div css={tw`w-full flex flex-row items-center`}>
                <div css={tw`flex flex-col`}>
                    <h2 css={tw`text-2xl text-neutral-50 font-header font-medium`}>Mounts</h2>
                    <p css={tw`text-base text-neutral-400`}>Configure and manage additional mount points for servers.</p>
                </div>

                <Button type={'button'} size={'large'} css={tw`h-10 ml-auto px-4 py-0`}>
                    New Mount
                </Button>
=======
            <div>
                <h2 css={tw`text-2xl text-neutral-50 font-header font-medium`}>Mounts</h2>
                <p css={tw`text-base text-neutral-400`}>Configure and manage additional mount points for servers.</p>
>>>>>>> a64c0392531cdd0a94a7ddf38606470b4acd3207
            </div>
        </AdminContentBlock>
    );
};
