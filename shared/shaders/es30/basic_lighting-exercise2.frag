#version 300 es
#undef lowp
#undef mediump
#undef highp

precision lowp float;

in vec3 normal;
in vec3 fragViewPos;
in vec3 lightViewPos; // Extra in variable, since we need the light position in view space we calculate this in the vertex shader

out vec4 color;

uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
	// Ambient
	float ambientStrength = .1;
	vec3 ambient = ambientStrength * lightColor;

	// Diffuse
	vec3 norm = normalize(normal);
	vec3 lightDir = normalize(lightViewPos - fragViewPos);
	float diff = max(dot(norm, lightDir), 0.);
	vec3 diffuse = diff * lightColor;

	// Specular
	float specularStrength = .5;
	vec3 viewDir = normalize(-fragViewPos);
	vec3 reflectDir = reflect(-lightDir, norm);
	float spec = pow(max(dot(viewDir, reflectDir), 0.), 32.);
	vec3 specular = specularStrength * spec * lightColor;

	vec3 result = (ambient + diffuse + specular) * objectColor;
	color = vec4(result, 1.);
}
