import { Expose } from "class-transformer";
import { IsString, IsDefined, IsIn, IsNumber, IsDate, MaxLength, IsOptional, IsNotEmpty, ValidateIf, Max } from "class-validator";

export class CitasG {

    @Expose({ name: "cit_codigo" })
    @ValidateIf(o => o["codigo-cita"] !== undefined)
    @IsNotEmpty({ message: 'The codigo-cita cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The codigo-cita is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The codigo-cita must be a string" } } })
    ["codigo-cita"]: string

    @Expose({ name: "cit_fecha" })
    @ValidateIf(o => o["fecha-cita"] !== undefined)
    @IsNotEmpty({ message: 'The fecha-cita cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The fecha-cita is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The fecha-cita must be a string" } } })
    ["fecha-cita"]: string

    @Expose({ name: "cit_estado" })
    @ValidateIf(o => o["estado-cita"] !== undefined)
    @IsNotEmpty({ message: 'The estado-cita cannot be empty' })
    @IsIn(["Pendiente", "Cancelada","Realizada"], { message: () => { throw { status: 406, message: "The estado-cita must be one of the following values: Pendiente, Cancelada,Realizada" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "The estado-cita is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The estado-cita must be a string" } } })
    ["estado-cita"]: string

    @Expose({ name: "cit_medico" })
    @ValidateIf(o => o["medico-cita"] !== undefined)
    @IsNotEmpty({ message: 'The medico-cita cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The medico-cita is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The medico-cita must be a string" } } })
    ["medico-cita"]: string

    @Expose({ name: "cit_datosUsuario" })
    @ValidateIf(o => o["datosUsuario-cita"] !== undefined)
    @IsNotEmpty({ message: 'The datosUsuario-cita cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The datosUsuario-cita is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The datosUsuario-cita must be a string" } } })
    ["usuario-cita"]: string

    constructor(data: Partial<CitasG>){Object.assign(this, data)}
}