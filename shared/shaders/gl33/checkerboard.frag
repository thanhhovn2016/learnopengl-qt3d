#version 330 core

float CkSize = 1.0f/9.0f;

in vec2 texCoord;

out vec4 color;

void main()
{
	int ckValue =
			((mod(texCoord.x, CkSize*2.0f) > CkSize)?0:1) +
			((mod(texCoord.y, CkSize*2.0f) > CkSize)?0:1);
	color = vec4(vec3(ckValue/3.0f), 1.0f);
}
