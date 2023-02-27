describe('User open diet meal app', () => {
    utils('Input valid profile data', async () => {
        await $('#com.fghilmany.dietmealapp:id/et_name').setValue("wynda");
        await $('#com.fghilmany.dietmealapp:id/et_weight').setValue(55);
        await $('#com.fghilmany.dietmealapp:id/et_height').setValue(158);
        await $('#com.fghilmany.dietmealapp:id/rb_female').click();
        await $('#com.fghilmany.dietmealapp:id/bt_next').click();

        await $('#com.fghilmany.dietmealapp:id/rb_rest').click();
        await $('#com.fghilmany.dietmealapp:id/bt_finish').click();
    })
})