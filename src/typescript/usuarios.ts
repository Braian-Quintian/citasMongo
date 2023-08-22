import { Expose } from 'class-transformer';
import { IsString, IsDefined, IsIn,IsNumber,IsDate, MaxLength,IsOptional,IsNotEmpty,ValidateIf,Max } from 'class-validator';


export class UsuariosG {

    @Expose({ name: "usu_id"})
    @ValidateIf(o => o["dni-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The dni-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The dni-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The dni-usuario must be a string" } } })
    ["dni-usuario"] : string

    @Expose({ name: "usu_nombre"})
    @ValidateIf(o => o["nombre-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The nombre-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The nombre-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The nombre-usuario must be a string" } } })
    ["nombre-usuario"] : string

    @Expose({name: "usu_segdo_nombre"})
    @ValidateIf(o => o["segundo-nombre-usuario"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The segundo-nombre-usuario must be a string" } } })
    ["segundo-nombre-usuario"] : string

    @Expose({name: "usu_primer_apellido"})
    @ValidateIf(o => o["primer-apellido-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The primer-apellido-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The primer-apellido-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The primer-apellido-usuario must be a string" } } })
    ["primer-apellido-usuario"] : string

    @Expose({ name: "usu_segdo_apellido"})
    @ValidateIf(o => o["segundo-apellido-usuario"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The segundo-apellido-usuario must be a string" } } })
    ["segundo-apellido-usuario"] : string

    @Expose({ name: "usu_telefono"})
    @ValidateIf(o => o["telefono-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The telefono-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The telefono-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The telefono-usuario must be a string" } } })
    ["telefono-usuario"] : string

    @Expose({ name: "usu_direccion"})
    @ValidateIf(o => o["direccion-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The direccion-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The direccion-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The direccion-usuario must be a string" } } })
    ["direccion-usuario"] : string
    
    @Expose({ name: "usu_e-mail"})
    @ValidateIf(o => o["email-usuario"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The e-mail-usuario must be a string" } } })
    ["email-usuario"] : string

    @Expose({ name: "usu_tipodoc"})
    @ValidateIf(o => o["tipo-documento-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The tipo-documento-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The tipo-documento-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The tipo-documento-usuario must be a string" } } })
    ["tipo-documento-usuario"] : string

    @Expose({ name: "usu_NumeroDoc"})
    @ValidateIf(o => o["numero-documento-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The numero-documento-usuario cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The numero-documento-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The numero-documento-usuario must be a string" } } })
    ["numero-documento-usuario"] : string

    @Expose({ name: "usu_genero" })
    @ValidateIf(o => o["genero-usuario"] !== undefined)
    @IsNotEmpty({ message: 'The genero-usuario cannot be empty' })
    @IsIn(["Masculino", "Femenino", "Otro"], { message: "The genero-usuario must be 'Masculino', 'Femenino' or 'Otro'" })
    @IsDefined({ message: () => { throw { status: 422, message: "The genero-usuario is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The genero-usuario must be a string" } } })
    ["genero-usuario"]: string;
 
    @Expose({ name: "usu_acudiente"})
    @ValidateIf(o => o["acudiente-usuario"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The acudiente-usuario must be a string" } } })
    ["acudiente-usuario"] : string

    constructor(data: Partial<UsuariosG>){Object.assign(this, data)}
}

export class UsuariosGA {
    @Expose({ name: "acu_codigo"})
    @ValidateIf(o => o["codigo-acudiente"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The codigo-acudiente must be a string" } } })
    ["codigo-acudiente"] : string

    @Expose({ name: "acu_nombreCompleto"})
    @ValidateIf(o => o["nombre-completo-acudiente"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The nombre-completo-acudiente must be a string" } } })
    ["nombre-completo-acudiente"] : string

    @Expose({ name: "acu_telefono"})
    @ValidateIf(o => o["telefono-acudiente"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The telefono-acudiente must be a string" } } })
    ["telefono-acudiente"] : string

    @Expose({ name: "acu_direccion"})
    @ValidateIf(o => o["direccion-acudiente"] !== undefined)
    @IsOptional()
    @IsString({ message: () => { throw { status: 406, message: "The direccion-acudiente must be a string" } } })
    ["direccion-acudiente"] : string

    constructor(data: Partial<UsuariosGA>){Object.assign(this, data)}
}