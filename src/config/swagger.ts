import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app): void => {
    const swaggerOptions = new DocumentBuilder()
        .setTitle('API with MongoDB')
        .setDescription('API made with mongoDB using node framework called nestjs')
        .setVersion('1.0')
        .addTag('Author - Vinícius Rodrigues')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, swaggerOptions);

    SwaggerModule.setup('swagger', app, document);
};
